using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Configuration;
using System.Linq;
using System.Web;
using IronWebScraper;
using HtmlAgilityPack;
using System.Net.Http;

namespace IronScraper.Scraper
{
    public class Scrap
    {
        static void Main(string[] args)
        {
            getHtml();
            Console.ReadLine();
        }


        public static async void getHtml()
        {
            var url = "https://www.google.ca/search?sxsrf=ALeKk005fDhOiW380BTID5lJOEHO-KKIzQ%3A1583814054234&source=hp&ei=phVnXvj6C7Kxggexx5ioCQ&q=recipes&oq=recipes&gs_l=psy-ab.3..35i39l3j0i131l2j0j0i131l2j0j0i131.2447.3437..3691...2.0..0.86.86.1......0....1..gws-wiz.....10..35i362i39.ux6AyHwbmII&ved=0ahUKEwj45dyQh4_oAhWymOAKHbEjBpUQ4dUDCAg&uact=5";
            var client = new HttpClient();
            var html = await client.GetStringAsync(url);
            var document = new HtmlDocument();
            document.LoadHtml(html);
            var titles = document.DocumentNode.Descendants("h3")
                .Where(node => node.GetAttributeValue("class", "")
                .Contains("LC201b")).ToList();
            Console.WriteLine(html.Result);
        }

        public void scrap(string page)
        {
            var website = new HtmlWeb();
            var document = website.Load(page);
        }
    }
}