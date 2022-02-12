package casestudy.basic.fasttag.FastTag.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;//used to handle template variables in the request URI Mapping
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import casestudy.basic.fasttag.FastTag.entity.FastTag;
import casestudy.basic.fasttag.FastTag.service.FastTagService;


@RestController
@RequestMapping("/fest")//used to map web requests onto specific handler methods or classes

//inform the back end and accept the requests from url of react
@CrossOrigin(origins="http://localhost:3000")
public class FastTagContoller 
{
	@Autowired
	FastTagService service;
	
	
	//ka123 has successfullay updated
	@PutMapping("/fast")
	public String enemy(@RequestBody FastTag tollgate)
	{
		return service.interact(tollgate).getVehicleNumber()+" has successfully updated";
	}
	
	//for getting all information in the list
	@GetMapping("/")
	public List<FastTag> hogan()
	{
		return service.readEverything();
	}
	
	//localhost:8080//DLitheBootcampJan2022/fest/ka123
	@GetMapping("/{comp}")//handle the HTTP get requests matched with "/comp" URI expression
	public FastTag monkey(@PathVariable("comp") String comp)
	{
		return service.readOne(comp);
	}
	
	
}
