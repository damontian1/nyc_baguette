require 'sinatra'
require 'pony'

get '/styles.css' do
  scss :styles
end

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


post '/contact' do 
  configure_pony
  name = params[:name]
  sender_email = params[:email]
  message = params[:message]
  logger.error params.inspect
  begin
    Pony.mail(
      :from => "#{name}<#{sender_email}>",
      :to => 'killahb304@gmail.com',
      :subject =>"#{name} has contacted you",
      :body => "#{message}",
    )
    redirect '/'

  end
end

def configure_pony
  Pony.options = {
  :via => :smtp,
  :via_options => {
    :address              => 'smtp.gmail.com',
    :port                 => '587',
    :enable_starttls_auto => true,
    :user_name            => 'killahb304@gmail.com',
    :password             => '',
    :authentication       => :plain, # :plain, :login, :cram_md5, no auth by default
    }    
  }
end