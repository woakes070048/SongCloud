class Playlist < ActiveRecord::Base
  validates :title, :user_id, presence: true
  validates :private, inclusion:{ in: [true, false], message: "Please specify if it is private/public" }
  validates :title, presence: true

  # before_validation :ensure_image_url

  has_attached_file :image, default_url: 'default_playlist_img.png'
  validates_attachment_content_type :image, content_type: /^image\/(png|gif|jpeg)/
  validates_attachment_size :image, less_than: 2.megabyte

  belongs_to :user
  has_many :playlistings, dependent: :destroy
  has_many :songs, through: :playlistings

  private

  def ensure_image_url
    self.image ||= self.user.image
  end
end
