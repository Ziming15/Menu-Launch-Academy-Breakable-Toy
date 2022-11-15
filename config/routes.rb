Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/", to: "static_pages#index"
  get "restaurants", to: "static_pages#index"

  namespace :api do
    namespace :v1 do
      resources :restaurants, only: [:index]
    end
  end
end
