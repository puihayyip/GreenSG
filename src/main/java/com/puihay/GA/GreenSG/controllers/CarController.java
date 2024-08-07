package com.puihay.GA.GreenSG.controllers;

import java.util.List;

import com.puihay.GA.GreenSG.entities.Car;
import com.puihay.GA.GreenSG.services.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class CarController {

  @Autowired
  CarService carService;

  @GetMapping("/cars")
  public List<Car> getCars() {
    return carService.getCars();
  }

  @GetMapping("/car")
  public Car getCar(@RequestParam String carplate) {
    return carService.getCar(carplate);
  }

  @PostMapping("/cars")
  public Car postCar(@RequestBody Car car) {
    return carService.postCar(car);
  }

  @PostMapping("/cars/seed")
  public List<Car> carSeed() {
    return carService.carSeed();
  }

}
