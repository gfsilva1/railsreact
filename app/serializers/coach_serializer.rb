class CoachSerializer
  include JSONAPI::Serializer
  attributes :id, :title, :body, :image, :created_at, :updated_at, :image_url
end
