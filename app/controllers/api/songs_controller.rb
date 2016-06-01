class Api::SongsController < ApplicationController
	def create
		@song = Song.new(song_params)
		debugger
		if @song.save
			render "api/songs/show"
		else
			render json: @song.errors, status: 422
		end
	end

	private

	def song_params
		params.require(:song).permit(:title, :user_id, :file_url, :img_url, :description, :private)
	end
end
