Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :coaches do
        collection do
          get :lastest
        end
      end
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
