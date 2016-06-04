Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]

    resources :songs, only: [:index, :create, :destroy, :show, :update]
  end

  root "static_pages#root"
end
