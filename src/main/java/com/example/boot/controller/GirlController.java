package com.example.boot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.boot.domain.Girl;
import com.example.boot.domain.GirlRepository;
import com.example.boot.service.GirlService;

@RestController
public class GirlController {

	
	public GirlController() {
		// TODO Auto-generated constructor stub
	}
	
	@Autowired
	private GirlRepository girlRepository;
	
	@Autowired
	private GirlService girlService;
	/*
	 *	查询所有女生列表
	 * */
	@GetMapping(value="/girls")
	public List<Girl> girlList() {
		return girlRepository.findAll();	//Jpa自带API，不需要写SQL语句，findAll()直接返回girl表中数据list
	}
	
	/*
	 *	添加一个女生
	 * */
	@PostMapping(value="/girls")
	public Girl girlAdd(@RequestParam("cupSize") String cupSize, @RequestParam("age") Integer age){
		Girl girl = new Girl();
		girl.setCupSize(cupSize);
		girl.setAge(age);
		return girlRepository.save(girl);
	}
	
	//	查询一个女生
	@GetMapping(value="/girls/{id}")
	public Girl girlFindOne(@PathVariable("id") Integer id){
		return girlRepository.findOne(id);
	}
	
	//	更新
	@PutMapping(value = "/girls/{id}")
	public Girl girlUpdate(@PathVariable("id") Integer id,
			@RequestParam("cupSize") String cupSize, @RequestParam("age") Integer age) {
		Girl girl = new Girl();
		girl.setId(id);
		girl.setCupSize(cupSize);
		girl.setAge(age);
		return girlRepository.save(girl);
	}
	
	//	删除
	@DeleteMapping(value = "/girls/{id}")
	public void girlDelete(@PathVariable("id") Integer id){
		girlRepository.delete(id);
	}
	
	//	通过年龄查询女生列表
	@GetMapping(value = "/girls/age/{age}")
	public List<Girl> girlListByAge(@PathVariable("age") Integer age) {
		return girlRepository.findByAge(age);
	}
	
	@PostMapping(value = "/girls/two")
	public void insertTwo() {
		girlService.insertTwo();
	}
}
