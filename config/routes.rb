Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get ":location", to: "static_pages#index"
  get ":location/:restaurant", to: "static_pages#index"

  namespace :api do
    namespace :v1 do
      resources :location, only: [:show] do
        resources :restaurant, only: [:show]
      end
    end
  end
end
