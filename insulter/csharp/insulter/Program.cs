using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace insulter
{
    class Program
    {
        static void Main(string[] args)
        {

            List<string> insults = new List<string>()
            {
                "You look like what morning breath smells like.",
                "If you tried to give me cpr I would probably throw myself back under water",
                "I am not a fan of you",
                "You think you're so special...and you are. The fact of your existence is nearly impossible to believe",
                "I'd rather walk than be on the same plane as you",
                "If I were given a million dollars to hang out with you...I would, but then I'd have to spend half of it on therapy",
                "Do you have to be so...like that?"
            };

            //count insults in List
            int insultsCount = insults.Count();

            //list to hold random insults to make sure there are no duplicates
            List<int> insultsContainer = new List<int>();

            //loop through insults and display random 3, combined lines 12 -23.
            for (int i = 0; i < 3; i++)
            {

                //random output with the insultsCount parameters
                int insultValue = new Random().Next(0, insultsCount - 1);

                //the insult value that is assigned by the random number variable
                string insult = insults[insultValue];

                // if the insult value assignment is already assigned dont do anything }else{ add number and Console.WriteLine(insult)
                //else add the number and console the insult
                while (!insultsContainer.Contains(insultValue))
                {
                    insultsContainer.Add(insultValue);
                    Console.WriteLine(insult);
                }
            }
        }
    }
}