require 'sinatra'

get '/' do
	erb :home
end

get '/products' do
	erb :products
end

get '/about' do
	erb :about
end

get '/contact' do
	erb :contact
end