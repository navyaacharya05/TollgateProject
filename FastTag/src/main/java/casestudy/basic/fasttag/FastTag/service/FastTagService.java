package casestudy.basic.fasttag.FastTag.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import casestudy.basic.fasttag.FastTag.entity.FastTag;
import casestudy.basic.fasttag.FastTag.repository.FastTagRepository;

@Service
public class FastTagService 
{
	@Autowired
	FastTagRepository fastrepo;
	
	public FastTag interact(FastTag object)
	{
		return fastrepo.save(object);// pass the entity object that can be converted as record in the table
	}
	
	public List<FastTag> readEverything()
	{
		return fastrepo.findAll();
	}
	
	public FastTag readOne(String id)
	{
		return fastrepo.findById(id).orElse(new FastTag());
	}
	
	/*public String eraseOne(String id)
	{
		String name=readOne(id).getVehicleNumber()+" "+readOne(id).getBalance()+" has deleted\n";
		fastrepo.deleteById(id);
		return name;
	}*/
	
}
