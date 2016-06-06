class Api::SongsController < ApplicationController
	def index
		@songs = Song.includes(:artist).all
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
    @song = Song.find(params[:id])

    if @song.update(song_params)
      render :show
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

	def show
		@song = Song.find(params[:id])
		render "api/songs/show"
	end

  def destroy
    @song = Song.find(params[:id])

    if @song.destroy
      render :show
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

	private

	def song_params
		params.require(:song).permit(:title, :user_id, :file, :image, :description, :private)
	end
end
