json.array! @diaries do |diary|
  json.id diary.id
  json.date diary.diary_date
  json.content diary.content
  json.location diary.location
  json.latitude diary.latitude
  json.longitude diary.longitude
  json.created_at diary.created_at
  json.updated_at diary.updated_at
end
