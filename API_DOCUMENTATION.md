# Netflix Clone - API Documentation

## Overview

RESTful API for the Netflix Clone backend service built with Spring Boot. Provides endpoints for user management, video metadata, profiles, and payment processing.

## Base URL
```
Development: http://localhost:8080/api
Production: https://your-domain.com/api
```

## Authentication

Most endpoints require authentication. Include the authorization header:
```
Authorization: Bearer <your-jwt-token>
```

## Response Format

All responses follow this structure:
```json
{
  "success": true,
  "data": {},
  "message": "Success message",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

Error responses:
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Error description"
  },
  "timestamp": "2024-01-01T00:00:00Z"
}
```

## Endpoints

### Authentication

#### POST /auth/login
Authenticate user and receive JWT token.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": 1,
      "email": "user@example.com",
      "name": "John Doe"
    }
  }
}
```

#### POST /auth/register
Create new user account.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "name": "John Doe"
}
```

### User Management

#### GET /users/profile
Get current user profile information.

**Headers:** `Authorization: Bearer <token>`

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "email": "user@example.com",
    "name": "John Doe",
    "subscriptionPlan": "premium",
    "createdAt": "2024-01-01T00:00:00Z"
  }
}
```

#### PUT /users/profile
Update user profile information.

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "name": "John Smith",
  "email": "johnsmith@example.com"
}
```

### Video Content

#### GET /videos
Get paginated list of videos with optional filtering.

**Query Parameters:**
- `page` (int): Page number (default: 0)
- `size` (int): Page size (default: 20)
- `category` (string): Filter by category
- `genre` (string): Filter by genre
- `search` (string): Search by title

**Example:** `/videos?page=0&size=10&category=Now Playing`

**Response:**
```json
{
  "success": true,
  "data": {
    "content": [
      {
        "videoId": 1,
        "title": "The Witcher",
        "thumbnail": "witcher_thumbnail",
        "releaseYear": "2019",
        "category": "Fantasy - Action",
        "rating": 8.2,
        "suggestionCategory": "Now Playing"
      }
    ],
    "totalElements": 80,
    "totalPages": 8,
    "currentPage": 0,
    "size": 10
  }
}
```

#### GET /videos/{id}
Get detailed information about a specific video.

**Response:**
```json
{
  "success": true,
  "data": {
    "videoId": 1,
    "title": "The Witcher",
    "thumbnail": "witcher_thumbnail",
    "releaseYear": "2019",
    "category": "Fantasy - Action",
    "rating": 8.2,
    "suggestionCategory": "Now Playing",
    "description": "Geralt of Rivia, a solitary monster hunter...",
    "duration": "60 min",
    "cast": ["Henry Cavill", "Anya Chalotra"]
  }
}
```

#### GET /videos/categories
Get list of available video categories.

**Response:**
```json
{
  "success": true,
  "data": [
    "Now Playing",
    "Top Rated Movies",
    "New Releases",
    "Originals"
  ]
}
```

### User Profiles

#### GET /profiles
Get all profiles for the authenticated user.

**Headers:** `Authorization: Bearer <token>`

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "John",
      "avatar": "avatar1.png",
      "isKids": false,
      "createdAt": "2024-01-01T00:00:00Z"
    },
    {
      "id": 2,
      "name": "Kids",
      "avatar": "kids_avatar.png",
      "isKids": true,
      "createdAt": "2024-01-01T00:00:00Z"
    }
  ]
}
```

#### POST /profiles
Create a new profile.

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "name": "Jane",
  "avatar": "avatar2.png",
  "isKids": false
}
```

#### PUT /profiles/{id}
Update an existing profile.

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "name": "Jane Smith",
  "avatar": "new_avatar.png"
}
```

#### DELETE /profiles/{id}
Delete a profile.

**Headers:** `Authorization: Bearer <token>`

### My List

#### GET /mylist
Get user's saved video list.

**Headers:** `Authorization: Bearer <token>`

**Query Parameters:**
- `profileId` (int): Profile ID to get list for

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "videoId": 1,
      "title": "The Witcher",
      "thumbnail": "witcher_thumbnail",
      "addedAt": "2024-01-01T00:00:00Z"
    }
  ]
}
```

#### POST /mylist
Add video to user's list.

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "videoId": 1,
  "profileId": 1
}
```

#### DELETE /mylist/{videoId}
Remove video from user's list.

**Headers:** `Authorization: Bearer <token>`

**Query Parameters:**
- `profileId` (int): Profile ID

### Payment

#### POST /payments/process
Process payment for subscription.

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "cardNumber": "4111111111111111",
  "expiryMonth": "12",
  "expiryYear": "2025",
  "cvv": "123",
  "cardholderName": "John Doe",
  "plan": "premium"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "transactionId": "txn_123456789",
    "amount": 15.99,
    "currency": "USD",
    "status": "completed"
  }
}
```

#### GET /payments/history
Get payment history for user.

**Headers:** `Authorization: Bearer <token>`

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "transactionId": "txn_123456789",
      "amount": 15.99,
      "currency": "USD",
      "date": "2024-01-01T00:00:00Z",
      "plan": "premium",
      "status": "completed"
    }
  ]
}
```

## Error Codes

| Code | Description |
|------|-------------|
| `AUTH_001` | Invalid credentials |
| `AUTH_002` | Token expired |
| `AUTH_003` | Unauthorized access |
| `USER_001` | User not found |
| `USER_002` | Email already exists |
| `VIDEO_001` | Video not found |
| `PROFILE_001` | Profile not found |
| `PROFILE_002` | Maximum profiles reached |
| `PAYMENT_001` | Invalid payment details |
| `PAYMENT_002` | Payment processing failed |

## Rate Limiting

API requests are limited to:
- **Authenticated users**: 1000 requests per hour
- **Unauthenticated**: 100 requests per hour

Rate limit headers included in responses:
```
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1640995200
```

## Pagination

List endpoints support pagination with these parameters:
- `page`: Page number (0-based)
- `size`: Items per page (max 100)
- `sort`: Sort field and direction (e.g., `title,asc`)

Response includes pagination metadata:
```json
{
  "totalElements": 80,
  "totalPages": 8,
  "currentPage": 0,
  "size": 10,
  "first": true,
  "last": false
}
```

## Filtering and Searching

### Video Filtering
- `category`: Filter by suggestion category
- `genre`: Filter by video genre
- `year`: Filter by release year
- `rating`: Minimum rating filter

### Search
- `search`: Full-text search in title and description
- Supports partial matching
- Case-insensitive

Example: `/videos?search=witcher&category=Originals&rating=8.0`

## WebSocket Events

Real-time updates via WebSocket connection at `/ws`.

### Events
- `video.added` - New video added
- `profile.updated` - Profile information changed
- `list.updated` - My List modified

## SDK and Libraries

### JavaScript/Node.js
```javascript
const NetflixCloneAPI = require('netflix-clone-sdk');

const client = new NetflixCloneAPI({
  baseURL: 'http://localhost:8080/api',
  token: 'your-jwt-token'
});

// Get videos
const videos = await client.videos.list({ category: 'Now Playing' });
```

### Python
```python
from netflix_clone_sdk import NetflixCloneClient

client = NetflixCloneClient(
    base_url='http://localhost:8080/api',
    token='your-jwt-token'
)

# Get videos
videos = client.videos.list(category='Now Playing')
```

## Testing

### Postman Collection
Import the Postman collection for easy API testing:
```
https://api.postman.com/collections/netflix-clone-api
```

### cURL Examples

**Login:**
```bash
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"password123"}'
```

**Get Videos:**
```bash
curl -X GET "http://localhost:8080/api/videos?page=0&size=10" \
  -H "Authorization: Bearer your-jwt-token"
```

## Support

- **Documentation**: [Developer Guide](./DEVELOPER_GUIDE.md)
- **Issues**: Create GitHub issue
- **Email**: api-support@netflixclone.com