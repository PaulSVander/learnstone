require 'rest-client'
require 'json'

get '/' do
  erb :'index'
end

get '/card' do
  puts "REACHED 2"
  params[:card].gsub!(" ", "%20")
  response = RestClient.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards/#{params[:card]}", headers = {"X-Mashape-Key": ENV["HEARTHSTONE_TOKEN"]})
  response = JSON.parse(response)
  puts "REACHED 3"
  if request.xhr?
    puts "REACHED 4"
    erb :show_card, layout: false, locals: {response: response[0]}
  else
    erb :'show_card', locals: {response: response[0]}
  end

end
