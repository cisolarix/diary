Rails.application.routes.draw do
  get "up" => "rails/health#show", as: :rails_health_check

  namespace :api do
    get "health", to: "health#show"
    post "auth/login", to: "auth#login"
    get "diaries", to: "diaries#index"
    get "diaries/:date", to: "diaries#show"
    put "diaries/:date", to: "diaries#upsert"
    delete "diaries/:date", to: "diaries#destroy"
  end
end
