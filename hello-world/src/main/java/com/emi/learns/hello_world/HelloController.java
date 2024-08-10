package com.emi.learns.hello_world;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    @RequestMapping("/")
    String hello() {
        System.out.println("Hit this shit");
        return "Hello World1!!!!!";
    }
}