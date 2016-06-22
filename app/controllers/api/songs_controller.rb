class Api::SongsController < ApplicationController
	def index
		# songs = Song.all
		# songs = songs.where(filter) if filter
		songs =
			if params[:user_id]
				Song.where(user_id: params[:user_id])#.includes(:artist)
			# elsif params[:playlist_id]
			# 	playlist = Playlist.find(params[:playlist_id])
			# 	playlist.songs
			else
				Song.all
			end
		# songs = songs.where(filter) if filter
		@songs = songs.includes(:artist)
		render :index
	end

	def create
		@song = Song.new(song_params)
		if @song.save
			render "api/songs/show"
		else
			render json: @song.errors, status: 422
		end
	end

  def update
    @song = current_user.songs.find(params[:id])

    if @song.update(song_params)
      render :show
    else
      render json: @song.errors, status: 422
    end
  end

	def show
		@song = Song.find(params[:id])
		render "api/songs/show"
	end

  def destroy
    @song = current_user.songs.find(params[:id])

    if @song.destroy
      render :show
    else
      render json: @song.errors, status: 422
    end
  end

	private

	def song_params
		params.require(:song).permit(:title, :user_id, :file, :image, :description, :private)
	end

	def filter
		params[:filter].permit(:user_id) if params[:filter]
	end
end
