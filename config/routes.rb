Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users
  authenticated :user do
    root 'homepage#index', as: :authenticated_root
  end
  namespace :api do
    namespace :v1 do
      get 'recipes/index'
      post 'recipes/create'
      get '/edit/:id', to: 'recipes#edit'
      get '/show/:id', to: 'recipes#show'
      put '/update/:id', to: 'recipes#update'
      delete '/destroy/:id', to: 'recipes#destroy'
      get '/search', to: 'recipes#search'
      post '/search', to: 'recipes#search'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
