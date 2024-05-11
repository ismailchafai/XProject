package org.bshg.taxe38.dao;
import org.bshg.taxe38.entity.Redevable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;
public interface RedevableDao extends JpaRepository<Redevable, Long> {
int deleteByIdIn(List<Long> ids);
Redevable findRedevableByUsername(String username);
}