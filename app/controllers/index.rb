require 'rest-client'
require 'json'

get '/' do
  options = {width: 1280, height: 720, channel: "ESL_Hearthstone"}
  erb :'index', locals: {options: options}
end

post '/' do
  options = {width: 1280, height: 720, channel: "#{params[:channel]}"}
  erb :'index', locals: {options: options}
end

get '/card' do
  params[:card].gsub!(" ", "%20")
  response = RestClient.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards/#{params[:card]}", headers = {"X-Mashape-Key": ENV["HEARTHSTONE_TOKEN"]})
  response = JSON.parse(response)

  if request.xhr?
    erb :show_card, layout: false, locals: {response: response[0]}
  else
    erb :'show_card', locals: {response: response[0]}
  end

end
