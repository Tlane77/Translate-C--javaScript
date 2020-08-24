using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace fizzbuzz
{
    class Program
    {
        static void Main(string[] args)
        {

            //change let to int and n into i
            for (int i = 1; i <= 100; i++)
            {
                if (i % 15 == 0)
                {

                    //Capitalize C and log changes to WriteLine
                    Console.WriteLine("fizzbuzz");
                }

                //(=== can be changed to ==)
                else if (i % 3 == 0)
                {
                    Console.WriteLine("fizz");
                }
                else if (i % 5 == 0)
                {
                    Console.WriteLine("buzz");
                }
                else
                {
                    Console.WriteLine(i);
                }

            }
        }
    }
}