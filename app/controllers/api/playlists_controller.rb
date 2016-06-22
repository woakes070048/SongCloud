class Api::PlaylistsController < ApplicationController
	def index
		playlists =
			if params[:user_id]
				Playlist.where(user_id: params[:user_id])#.includes(:user, :songs, :artist)
			else
				Playlist.all
			end
		# playlists = playlists.where(filter) if filter
		@playlists = playlists.includes(:user, :songs)
		render :index
	end

	def create
		@playlist = Playlist.new(playlist_params)
		if @playlist.save
			render "api/playlists/show"
		else
			render json: @playlist.errors, status: 422
		end
	end

  def update
    @playlist = current_user.playlists.find(params[:id])

    if @playlist.update(playlist_params)
      render :show
    else
      render json: @playlist.errors, status: 422
    end
  end

	def show
		@playlist = Playlist.find(params[:id])
		render "api/playlists/show"
	end

  def destroy
    @playlist = current_user.playlists.find(params[:id])

    if @playlist.destroy
      render :show
    else
      render json: @playlist.errors, status: 422
    end
  end

	private

	def playlist_params
		params.require(:playlist).permit(:title, :user_id, :file, :image, :description, :private)
	end

	def filter
		params[:filter].permit(:user_id) if params[:filter]
	end
end
