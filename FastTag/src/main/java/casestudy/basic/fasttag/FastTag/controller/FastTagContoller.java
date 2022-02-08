package casestudy.basic.fasttag.FastTag.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import casestudy.basic.fasttag.FastTag.entity.FastTag;
import casestudy.basic.fasttag.FastTag.service.FastTagService;


@RestController
@RequestMapping("/fest")

@CrossOrigin(origins="http://localhost:3000")
public class FastTagContoller 
{
	@Autowired
	FastTagService service;
	
	@PutMapping("/fast")
	public String enemy(@RequestBody FastTag tollgate)
	{
		return service.interact(tollgate).getVehicleNumber()+" has successfully updated";
	}
	
	@GetMapping("/")
	public List<FastTag> hogan()
	{
		return service.readEverything();
	}
	
	@GetMapping("/{comp}")
	public FastTag monkey(@PathVariable("comp") String comp)
	{
		return service.readOne(comp);
	}
	
	/*@DeleteMapping("/remove/{id}")
	public String hemsworth(@PathVariable("id") String id)
	{
		return service.eraseOne(id);
	}*/
	
}
