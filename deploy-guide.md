# 🚀 RedBus MEAN Stack Deployment Guide

## Prerequisites
- GitHub account
- MongoDB Atlas account (already set up)
- Vercel account (for frontend)
- Render account (for backend)

---

## 1️⃣ Deploy Backend to Render

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Create Render Web Service
1. Go to https://dashboard.render.com
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repo
4. Fill in:
   - **Name**: `redbus-backend`
   - **Root Directory**: `backend`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`

5. Add Environment Variables:
   - `MONGO_URI` = `mongodb+srv://khushiiee26_db_user:khushisharmanew@cluster0.ojp1ebm.mongodb.net/redbus?retryWrites=true&w=majority`
   - `JWT_SECRET` = `redbus_jwt_secret_key_2024_secure`
   - `PORT` = `5000`

6. Click **"Create Web Service"**
7. Copy the deployed URL (e.g., `https://redbus-backend.onrender.com`)

---

## 2️⃣ Deploy Frontend to Vercel

### Step 1: Update API URL
Replace `http://localhost:5000` in all frontend services with your Render backend URL.

Edit these files and replace:
- `frontend/src/app/services/auth.service.ts`
- `frontend/src/app/services/community.service.ts`
- `frontend/src/app/services/review.service.ts`
- `frontend/src/app/services/post.service.ts`
- `frontend/src/app/services/notification.service.ts`
- `frontend/src/app/components/booking/booking.component.ts`
- `frontend/src/app/pages/notifications/notifications.ts`

**Replace:**
```
http://localhost:5000
```
**With:**
```
https://redbus-backend.onrender.com
```

### Step 2: Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Navigate to frontend: `cd frontend`
3. Run: `vercel`
4. Follow prompts (login with GitHub)
5. Set framework preset to **Angular**
6. Output directory: `dist/frontend`

### Step 3: Set environment in Vercel
```
API_URL: https://redbus-backend.onrender.com
```

---

## 3️⃣ Update CORS

In `backend/server.js`, update CORS:
```js
app.use(cors({
  origin: ['http://localhost:4200', 'https://your-frontend.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
```

---

## 4️⃣ Final Steps
1. ✅ Backend deployed on Render
2. ✅ Frontend deployed on Vercel
3. ✅ MongoDB Atlas already connected
4. ✅ Test the full flow: Signup → Login → Book → Email → Payment

---

## Quick Deploy Commands

### Backend (Render auto-deploys from GitHub)
Just push to GitHub and Render auto-deploys.

### Frontend
```bash
cd frontend
vercel --prod
```

---

## 🎯 Done! Your app is live!