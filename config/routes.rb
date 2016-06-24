Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show] do
      resources :songs, only: [:index]
      resources :playlists, only: [:index]
    end

    resource :session, only: [:create, :destroy, :show]

    resources :songs, only: [:index, :create, :destroy, :show, :update]
    resources :playlists, only: [:index, :create, :destroy, :show, :update]
  end

  root "static_pages#root"

  get '/auth/:provider/callback', to: 'api/sessions#auth_create'
end
