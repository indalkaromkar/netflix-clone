# Netflix Clone

A full-stack Netflix-inspired streaming platform built with React and Spring Boot, featuring user authentication, video browsing, profile management, and payment processing.

## 📚 Documentation

- **[User Guide](./USER_GUIDE.md)** - Complete guide for end users
- **[Developer Guide](./DEVELOPER_GUIDE.md)** - Setup and development instructions
- **[API Documentation](./API_DOCUMENTATION.md)** - REST API reference

## 🚀 Quick Start

### Frontend
```bash
npm install
npm start
```

### Backend
```bash
cd backend
mvn spring-boot:run
```

## 🧪 Test Coverage

This project includes comprehensive test suites for both client and server side to achieve high test coverage.

## Client Side Testing (React)

### Test Structure
- **Components Tests**: `/src/Components/__tests__/`
- **Pages Tests**: `/src/Pages/__tests__/`
- **App Tests**: `/src/App.test.js`

### Running Tests
```bash
# Run all tests
npm test

# Run tests with coverage report
npm run test:coverage
```

### Coverage Includes
- Component rendering and props
- User interactions (clicks, form inputs)
- API calls and data fetching
- Routing functionality
- State management

## Server Side Testing (Spring Boot)

### Test Structure
- **Controller Tests**: `/backend/src/test/java/com/netflixClone/backend/controller/`
- **Service Tests**: `/backend/src/test/java/com/netflixClone/backend/service/`
- **Model Tests**: `/backend/src/test/java/com/netflixClone/backend/model/`
- **Integration Tests**: `/backend/src/test/java/com/netflixClone/backend/integration/`

### Running Tests
```bash
cd backend

# Run all tests
mvn test

# Run tests with coverage report
mvn test jacoco:report
```

### Coverage Includes
- REST API endpoints
- Service layer business logic
- Data persistence layer
- Model validation
- Integration testing with H2 database

## Test Coverage Goals
- **Client Side**: 80%+ coverage on branches, functions, lines, and statements
- **Server Side**: 100% coverage on critical business logic
- **Integration**: End-to-end user flows

## Key Test Files Created

### Client Side
1. `Globalfooter.test.js` - Footer component tests
2. `BrowserNav.test.js` - Navigation component tests
3. `Browse.test.js` - Main browse page tests
4. `VideoCard.test.js` - Video card component tests
5. `ProfilePicker.test.js` - Profile selection tests
6. `AddProfile.test.js` - Profile creation tests
7. `MyList.test.js` - User list functionality tests
8. `Main.test.js` - Landing page tests
9. `Login.test.js` - Authentication tests
10. `Signin_component.test.js` - Sign-in form tests

### Server Side
1. `userAccountControllerTest.java` - User account API tests
2. `paymentControllerTest.java` - Payment processing API tests
3. `userAccountServiceImplTest.java` - User service logic tests
4. `userAccountTest.java` - User model tests
5. `UserAccountIntegrationTest.java` - End-to-end integration tests

## Configuration Files
- `package.json` - Updated with coverage thresholds and scripts
- `pom.xml` - Added JaCoCo plugin and H2 test database
- `application-test.properties` - Test database configuration

Run the tests to ensure all functionality works correctly and maintains high code quality standards.