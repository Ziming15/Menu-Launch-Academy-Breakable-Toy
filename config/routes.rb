Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/", to: "static_pages#index"
  get "restaurants/:city", to: "static_pages#index"
  get "restaurants/:city/:restaurant", to: "static_pages#index"

  namespace :api do
    namespace :v1 do
      resources :restaurants, only: [:show] do
        resources :restaurant, only: [:show]
      end
    end
  end
end
