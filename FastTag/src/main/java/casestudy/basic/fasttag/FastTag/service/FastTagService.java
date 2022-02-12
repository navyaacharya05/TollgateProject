package casestudy.basic.fasttag.FastTag.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import casestudy.basic.fasttag.FastTag.entity.FastTag;
import casestudy.basic.fasttag.FastTag.repository.FastTagRepository;

/*
 * save(object)	// new/ update>> if primary key/id object already there it will update, else add the new entity 
 * findAll()	// list<entity>
 * findById(id)>> json/xml / getById(id)>> xml>> dataformat.xml	// entity/ corporate
 * deleteById(id)/delete(object)	>> void
 */


@Service
public class FastTagService 
{
	@Autowired
	FastTagRepository fastrepo;// get the instance/memory of the component
	
	
	public FastTag interact(FastTag object)
	{
		return fastrepo.save(object);// pass the entity object that can be converted as record in the table
	}
	
	public List<FastTag> readEverything()
	{
		return fastrepo.findAll();
	}
	
	//Reading information by using id
	public FastTag readOne(String id)
	{
		return fastrepo.findById(id).orElse(new FastTag());
	}
	
}
