package casestudy.basic.fasttag.FastTag.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import casestudy.basic.fasttag.FastTag.entity.FastTag;

@Repository
public interface FastTagRepository extends JpaRepository<FastTag, String>{

}
