package com.Touristproject.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Touristproject.Entity.Tourist;
import com.Touristproject.Repository.TouristRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class TouristController {
	
	@Autowired
	private TouristRepository touristRepository;
	
	
	//get all tourist
	
	@GetMapping("/tourists")
	public List<Tourist> getAllTourist(){
		return touristRepository.findAll(Sort.by(Sort.Direction.DESC,"firstName"));
		
	}
	
	// create tourist rest api
	
	@PostMapping("/tourists")
	public Tourist createTourist(@RequestBody Tourist tourist) {
	   return touristRepository.save(tourist);
	}

}
