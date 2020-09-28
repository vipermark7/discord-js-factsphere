# discord-js-factsphere

This code is for a Discord bot written in Node.js. It takes a file with Fact Sphere quotes on each line, and each time a user asks for a "fact" by typing !fact, it gets a random line from the file and prints it to the user. 

Note that the bot needs a token to run. This comes from the "General Information" section in the page at the Discord developer portal where you adjust the settings for your bot. See [this page](https://discordpy.readthedocs.io/en/latest/discord.html) for more details on how to set up your bot.

This bot was written for a demo for a talk I will be giving at The JavaScript Club in Cleveland.

# Examples: 

   **!fact**
   
   The average life expectancy of a rhinoceros in captivity is 15 years.
  
  **!moarfacts 3**
  
  This situation is hopeless.
  
  According to Norse legend, thunder god Thor's chariot was pulled across the sky by two goats.
  
  The Fact Sphere is a good person, whose insights are relevant.

# To run: 
Clone the repository, follow [these steps](https://discordpy.readthedocs.io/en/latest/discord.html), and run the bot by changing into the right directory and typing:

  node bot.js

after providing a valid token in a seperate .env file (in the same directory as the rest of the code) in this format: 
  
  TOKEN=asd;lkfjk21423
