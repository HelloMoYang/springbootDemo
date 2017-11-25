package com.example.boot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.boot.domain.GirlProperties;

@RestController
@RequestMapping("/hello")	//这样在类上也加映射，访问时需要将类和方法的映射路径拼接起来，如（/hello/say）
public class HelloController {
	
//	@Value("${cupSize}")
//	private String cupSize;		//通过注解把配置文件application.yml的内容cupSize值注入到变量cupSize中
//	
//	@Value("${age}")
//	private Integer age;
//	
//	@Value("${content}")
//	private String content;
	
	@Autowired
	private GirlProperties girlProperties;
	/*
	 * @PathVarivable	获取url中的数据	"/say/66"   
	 * @RequestParam	获取请求参数的值	"/say/id=66"	（两种传参形式不一样）
	 * @RequestParam(value = "id", required = false, defaultValue = "0")  *设置不传值时的默认值*
	 * 
	 * @GetMapping		组合注解
	 * */
	//@RequestMapping(value = {"/hello","/hi"})  *这样通过/hello或者/hi都可以访问到*
	
	@RequestMapping(value = "/say", method = RequestMethod.POST)	//等同于@PostMapping(value = "/say")，类似的还有@GetMapping等等
	public String saying(@RequestParam("id") Integer id) {
//		return girlProperties.getCupSize();
		return "id: " + id;
	}
	
}
