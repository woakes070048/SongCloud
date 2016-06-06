class Song < ActiveRecord::Base
  validates :title, :user_id, presence: true
  validates :private, inclusion:{ in: [true, false], message: "Please specify if it is private/public" }

  before_validation :ensure_image_url

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

  has_attached_file :image
  validates_attachment_content_type :image, content_type: /^image\/(png|gif|jpeg)/
  validates_attachment_size :image, less_than: 2.megabyte

  belongs_to(
    :artist,
    class_name: 'User',
    foreign_key: :user_id
  )

  private

  def ensure_image_url
    self.image ||= self.artist.image
  end
end
