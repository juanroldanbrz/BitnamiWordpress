package com.bitnami.wordpress;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(exclude={org.springframework.boot.autoconfigure.thymeleaf.ThymeleafAutoConfiguration.class} )
@EnableJpaRepositories
public class WordpressApplication {

	//@TODO Add proper logging
	public static void main(String[] args) {
		SpringApplication.run(WordpressApplication.class, args);
	}
}
