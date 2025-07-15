# Netflix Clone - Developer Guide

## Project Overview

A full-stack Netflix clone application built with React frontend and Spring Boot backend, featuring user authentication, video streaming, profile management, and payment processing.

## Tech Stack

### Frontend
- **React 18.3.1** - UI framework
- **React Router DOM 6.24.1** - Client-side routing
- **Bootstrap 5.3.3** - CSS framework
- **React Bootstrap 2.10.4** - Bootstrap components for React
- **Swiper 11.1.5** - Touch slider component
- **React Multi Carousel 2.8.5** - Carousel component

### Backend
- **Spring Boot 3.3.1** - Java framework
- **Spring Data JPA** - Data persistence
- **MySQL** - Production database
- **H2** - Test database
- **Lombok** - Code generation
- **SpringDoc OpenAPI** - API documentation

### Testing
- **Jest** - JavaScript testing framework
- **React Testing Library** - React component testing
- **JUnit 5** - Java testing framework
- **JaCoCo** - Java code coverage

## Project Structure

```
netflix-clone/
├── backend/                    # Spring Boot backend
│   ├── src/main/java/         # Java source code
│   ├── src/test/java/         # Java test files
│   └── pom.xml                # Maven configuration
├── src/                       # React frontend
│   ├── Components/            # Reusable React components
│   ├── Pages/                 # Page components
│   └── __tests__/            # Test files
├── public/                    # Static assets
├── SQL/                       # Database schema
└── coverage/                  # Test coverage reports
```

## Development Setup

### Prerequisites
- Node.js 16+
- Java 17+
- Maven 3.6+
- MySQL 8.0+

### Frontend Setup
```bash
# Install dependencies
npm install

# Start development server
npm start

# Run tests
npm test

# Generate coverage report
npm run test:coverage
```

### Backend Setup
```bash
cd backend

# Install dependencies
mvn clean install

# Run application
mvn spring-boot:run

# Run tests
mvn test

# Generate coverage report
mvn test jacoco:report
```

### Database Setup
1. Create MySQL database named `netflix`
2. Import schema from `SQL/video_meta_data.sql`
3. Configure database connection in `application.properties`

## API Documentation

### Base URL
- Development: `http://localhost:8080`
- API Documentation: `http://localhost:8080/swagger-ui.html`

### Key Endpoints
- `GET /api/videos` - Get video metadata
- `POST /api/users` - Create user account
- `POST /api/auth/login` - User authentication
- `GET /api/profiles` - Get user profiles
- `POST /api/payments` - Process payments

## Component Architecture

### Frontend Components

#### Core Pages
- **Main** - Landing page
- **Browse** - Video browsing interface
- **Login/Signin** - Authentication pages
- **Registration** - User registration flow
- **PaymentGateway** - Payment processing

#### Reusable Components
- **VideoCard** - Video thumbnail display
- **BrowserNav** - Navigation bar
- **ProfilePicker** - Profile selection
- **Globalfooter** - Site footer

### Backend Architecture

#### Controllers
- Handle HTTP requests
- Input validation
- Response formatting

#### Services
- Business logic implementation
- Data processing
- External API integration

#### Models
- Data entities
- Database mapping
- Validation rules

## Testing Strategy

### Frontend Testing
- **Unit Tests**: Component rendering and props
- **Integration Tests**: User interactions and API calls
- **Coverage Target**: 80% minimum

### Backend Testing
- **Unit Tests**: Service layer logic
- **Integration Tests**: API endpoints
- **Coverage Target**: 100% critical paths

### Test Commands
```bash
# Frontend tests
npm test
npm run test:coverage

# Backend tests
cd backend
mvn test
mvn test jacoco:report
```

## Build and Deployment

### Frontend Build
```bash
npm run build
```
Generates optimized production build in `build/` directory.

### Backend Build
```bash
cd backend
mvn clean package
```
Generates JAR file in `target/` directory.

### Environment Configuration
- Development: Local MySQL database
- Testing: H2 in-memory database
- Production: Configure via environment variables

## Code Quality Standards

### Frontend
- ESLint configuration in `package.json`
- Prettier for code formatting
- Component naming: PascalCase
- File naming: camelCase

### Backend
- Lombok for boilerplate reduction
- Spring Boot conventions
- Package structure: `com.netflixClone.backend`
- Class naming: PascalCase

## Contributing Guidelines

1. **Branch Naming**: `feature/feature-name` or `bugfix/bug-name`
2. **Commit Messages**: Use conventional commits format
3. **Code Review**: All changes require PR review
4. **Testing**: Maintain coverage thresholds
5. **Documentation**: Update docs for new features

## Troubleshooting

### Common Issues

#### Frontend
- **Port conflicts**: Change port in `package.json` scripts
- **Dependency issues**: Delete `node_modules` and run `npm install`
- **Build failures**: Check for syntax errors and missing imports

#### Backend
- **Database connection**: Verify MySQL service and credentials
- **Port conflicts**: Change server port in `application.properties`
- **Maven issues**: Run `mvn clean install` to refresh dependencies

### Debug Mode
- Frontend: React DevTools browser extension
- Backend: Enable debug logging in `application.properties`

## Performance Optimization

### Frontend
- Code splitting with React.lazy()
- Image optimization and lazy loading
- Bundle analysis with webpack-bundle-analyzer

### Backend
- Database query optimization
- Caching strategies
- Connection pooling

## Security Considerations

- Input validation on all endpoints
- SQL injection prevention with JPA
- CORS configuration for cross-origin requests
- Secure password handling
- JWT token authentication (if implemented)

## Monitoring and Logging

### Frontend
- Console logging for development
- Error boundary components
- Performance monitoring with Web Vitals

### Backend
- Spring Boot Actuator for health checks
- Structured logging with Logback
- Application metrics collection

## Additional Resources

- [React Documentation](https://reactjs.org/docs)
- [Spring Boot Documentation](https://spring.io/projects/spring-boot)
- [Testing Best Practices](./README.md#test-coverage-goals)
- [API Documentation](http://localhost:8080/swagger-ui.html)