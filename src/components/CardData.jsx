import shampoo from "../assets/aminities/bottle.png";
import soap from "../assets/aminities/soap.png";
import bidet from "../assets/aminities/bidet.png";
import waterheater from "../assets/aminities/water-heater.png";
import essentials from "../assets/aminities/essential.png";
import hanger from "../assets/aminities/hangers.png";
import bedlinen from "../assets/aminities/sheet.png";
import pillows from "../assets/aminities/pillows.png";
import screen from "../assets/aminities/window.png";
import iron from "../assets/aminities/iron.png";
import storage from "../assets/aminities/cupboard.png";
import tv from "../assets/aminities/tv.png";
import boardgames from "../assets/aminities/boardgames.png";
import wifi from "../assets/aminities/wifi.png";
import books from "../assets/aminities/books.png";
import beach from "../assets/aminities/beach.png";
// import cleaning_products from "../assets/aminities/cleaning_products.png";
import coffee from "../assets/aminities/coffe.png";
import cooking_basics from "../assets/aminities/cooking_basics.png";
import entance from "../assets/aminities/entrance.png";
import fan from "../assets/aminities/fan.png";
import fridge from "../assets/aminities/fridge.png";
import kettle from "../assets/aminities/kettle.png";
import locker from "../assets/aminities/locker.png";
import longstay from "../assets/aminities/longstay.png";
import microwave from "../assets/aminities/microwave.png";
import parking from "../assets/aminities/parking.png";
import workplace from "../assets/aminities/workplace.png";
import ac from "../assets/aminities/ac.png";

export const projects = [
  {
    title: "Bathroom and laundry",
    icon: [
      { src: { shampoo }, name: "Shampoo" },
      { src: { soap }, name: "Soap" },
      { src: { essentials }, name: "Essentials" },
      { src: { waterheater }, name: "Hot Water" },
      { src: { bidet }, name: "Bidet" },
      { src: { hanger }, name: "Hangers" },
      { src: { iron }, name: "Iron" },
    ],
    color: "bg-[#FDF7C3]",
  },
  {
    title: "Entertainment and Office",
    icon: [
      { src: { tv }, name: "TV" },
      { src: { boardgames }, name: "Board Games" },
      { src: { wifi }, name: "Wifi" },
      { src: { books }, name: "Books" },
      { src: { workplace }, name: "Dedicated Workspace" },
    ],
    color: "bg-[#FFEECC]",
  },
  {
    title: "Rooms",
    icon: [
      { src: { bedlinen }, name: "Bed linen" },
      { src: { pillows }, name: "Pillows" },
      { src: { storage }, name: "Storage" },
      { src: { locker }, name: "Locker" },
      { src: { ac }, name: "Air Conditioner" },
      { src: { fan }, name: "Fan" },
      { src: { screen }, name: "Window Blinds" },
    ],
    color: "bg-[#FFDDCC]",
  },
  {
    title: "Kitchen and dining",
    icon: [
      { src: { cooking_basics }, name: "Cutlery" },
      { src: { fridge }, name: "Fridge" },
      { src: { kettle }, name: "Kettle" },
      { src: { microwave }, name: "Oven" },
      { src: { coffee }, name: "Coffee" },
    ],
    color: "bg-[#FFCCCC]",
  },
  {
    title: "Location Features",
    icon: [
      { src: { entance }, name: "Private Entrance" },
      { src: { parking }, name: "Free On Road Parking" },
      { src: { longstay }, name: "Long Stay Available" },
    ],
    color: "bg-[#FEBBCC]",
  },
];
