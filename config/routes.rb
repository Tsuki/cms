Rails.application.routes.draw do
  get 'index/show'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'index#show'
end
