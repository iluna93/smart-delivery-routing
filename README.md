# 🚚 Smart Delivery Routing System

Real-time delivery route optimization system built for **Mr. Treadmill**, an Australian fitness equipment retailer. Vibe coded with Claude (Anthropic).

## 🎯 The Problem

Mr. Treadmill's drivers were managing deliveries manually — no route optimization, no real-time updates, no visibility for the office. Logistics costs were high and coordination was done via phone calls.

## ✅ The Solution

A two-panel web app that gives the office full control of daily stops and gives drivers a real-time optimized route — all synced live via Firebase.

## 🖥️ How It Works

**Office Panel (`office.html`)**
- Add, cancel, and delete delivery stops
- Assign service type: Delivery, Repair, Relocation, Pickup
- Set fixed arrival times (driver must arrive at exact time)
- View live status of all stops on an interactive map
- Navigate between dates to plan ahead

**Driver App (`index.html`)**
- Real-time optimized route with live traffic via Google Maps API
- Smart algorithm that respects fixed-time constraints
- Mark stops as Done or Skip (with reason sent to office instantly)
- ETA calculations and end-of-day finish time estimate
- Progress bar and live route updates when office adds new stops

**Backend (`apps-script.gs`)**
- Google Apps Script connected to Google Sheets
- Logs completion times and cancellation reasons

## 🛠️ Tech Stack

- **Firebase Realtime Database** — live sync between office and driver
- **Google Maps API** — route optimization with real-time traffic
- **Google Apps Script + Sheets** — data logging backend
- **Vanilla HTML/CSS/JS** — no framework, ships fast

## 🧠 Route Algorithm

Custom scheduling algorithm that:
1. Identifies fixed-time stops (customer must be visited at exact time)
2. Slots flexible stops around fixed constraints
3. Falls back to Google Maps `optimizeWaypoints` when no fixed stops exist
4. Estimates travel time using geocoordinates + 40km/h average speed

## 📊 Result

Reduced logistics coordination time and delivery costs for a multi-stop daily operation across Brisbane, Australia.

## 🔧 Built With

Vibe coded using **Claude (Anthropic)** — from idea to working production app.
