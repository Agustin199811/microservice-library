# Microservice for Library using Spring Boot

The library system aims to streamline the management of books, members, and loans by decoupling these operations into separate microservices. Each microservice independently handles a specific domain, ensuring modularity and ease of maintenance. This separation allows for scalable development and deployment, where each service can be developed, updated, and scaled independently without impacting the others. This microservices architecture enhances the system's flexibility, fault tolerance, and overall performance, ultimately providing a better user experience for both library staff and members.

## Project Status

This project is currently in development and is being worked on for version 1.0.0.

## Technologies Used

- Java 17
- Spring Boot
- Maven
- MySQL
- Spring Data JPA
- Docker

## Installation and Setup

1. Clone this repository to your local machine using the following command:
    ```bash
    git clone https://github.com/Agustin199811/microservice-bank.git

2. Import the project into your preferred IDE (e.g., IntelliJ IDEA or Eclipse) as a Maven project.

3. Run the Spring Boot application. The application will be available at `http://localhost:8082`.
    - Navigate to the root directory of your project (where your docker-compose.yml file is located).
        - `Build the Docker Compose`:
            ```bash
             docker-compose build
        - `Run the Docker container:`
            ```bash
             docker-compose up

## Usage


The Books REST API exposes the following endpoints:

- `GET /books`: Retrieve all books.
- `GET /books/{id}`: Retrieve a specific book by ID.
- `POST /books`: Create a new book.


The Member REST API exposes the following endpoints:

- `GET /members`: Retrieve all members.
- `POST /members`: Create a new member.

The Loan REST API exposes the following endpoints:

- `GET /loans`: Retrieve all loans record.
- `POST /loans`: Register a new loans.
- `PUT /loans/{id}/return`: Mark a loan as returned.

You can use tools such as Postman or cURL to send HTTP requests to these endpoints.

## Contribution

If you wish to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b my-new-feature`.
3. Make your changes and commit them: `git commit -am 'Add a new feature'`.
4. Push your changes to your forked repository: `git push origin my-new-feature`.
5. Create a new pull request and describe your changes in detail.

## License

This project is licensed under the MIT License. You can find more information in the `LICENSE` file.

## Contact
Authors: Toapanta Agustin; Llano Edison

If you have any questions or suggestions, feel free to contact the development team at (toapantaagustin9c@gmail.com).
