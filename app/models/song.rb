class Song < ActiveRecord::Base
  validates :title, :user_id, :file, presence: true
  validates :private, inclusion:{ in: [true, false], message: "Please specify if it is private/public" }

  # before_validation :ensure_image_url

  has_attached_file :file
  validates_attachment_content_type(
    :file,
    content_type:  [
      'audio/mpeg',
      'audio/x-mpeg',
      'audio/mp3',
      'audio/x-mp3',
      'audio/mpeg3',
      'audio/x-mpeg3',
      'audio/mpg',
      'audio/x-mpg',
      'audio/x-mpegaudio'
    ]
  )
  validates_attachment_size :file, less_than: 10.megabyte

  # has_attached_file :image, default_url: current_user.image_file_name
  # has_attached_file :image, default_url: self.artist.image_url
  # has_attached_file :image
  has_attached_file :image, default_url: 'default_profile_img.jpg'
  validates_attachment_content_type :image, content_type: /^image\/(png|gif|jpeg)/
  validates_attachment_size :image, less_than: 2.megabyte

  belongs_to(
    :artist,
    class_name: 'User',
    foreign_key: :user_id
  )

  has_many :playlistings, dependent: :destroy
  has_many :playlists, through: :playlistings

  private

  def ensure_image_url
    self.image ||= current_user.image
  end
end
