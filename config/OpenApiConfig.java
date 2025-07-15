package com.netflixClone.backend.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.servers.Server;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI netflixCloneOpenAPI() {
        Server devServer = new Server();
        devServer.setUrl("http://localhost:8080");
        devServer.setDescription("Development server");

        Info info = new Info()
                .title("Netflix Clone API")
                .description("REST API for Netflix Clone application")
                .version("1.0.0");

        return new OpenAPI().info(info).servers(List.of(devServer));
    }
}
