class Song < ActiveRecord::Base
  validates :title, :file_url, :img_url, :user_id, presence: true
  validates :private, inclusion:{ in: [true, false], message: "Please specify if it is private/public" }

  before_validation :ensure_img_url

  belongs_to(
    :artist,
    class_name: 'User',
    foreign_key: :user_id
  )

  private

  def ensure_img_url
    self.img_url ||= self.artist.img_url
  end
end
