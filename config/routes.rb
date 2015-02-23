Rails.application.routes.draw do
  get '/favicon.ico' => redirect('/images/favicon.png')

  namespace :api do
    resources :character_templates, only: [:index, :create, :update, :destroy]
    resources :item_templates,      only: [:index, :create, :update, :destroy]
    resources :member_items,        only: [:index, :create, :update, :destroy]
    resources :member_skills,       only: [:index, :create, :update, :destroy]
    resources :parties,             only: [:index, :create, :update, :destroy]
    resources :party_members,       only: [:index, :create, :update, :destroy]
    resources :skill_templates,     only: [:index, :create, :update, :destroy]
  end

  # This statement matches any path that rails doesn't recognize.
  #
  # This allows us to pass routes to the angular router
  match '/*path' => redirect( '/?goto=%{path}' ), via: :get
end
