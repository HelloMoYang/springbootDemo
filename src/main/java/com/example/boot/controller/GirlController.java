package com.example.boot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.boot.domain.Girl;
import com.example.boot.domain.GirlRepository;

@RestController
public class GirlController {

	
	public GirlController() {
		// TODO Auto-generated constructor stub
	}
	
	@Autowired
	private GirlRepository girlRepository;
	
	@GetMapping(value="/girls")
	public List<Girl> girlList() {
		return girlRepository.findAll();
	}
}
