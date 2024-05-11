package org.bshg.taxe38.dao;
import org.bshg.taxe38.entity.Rue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;
public interface RueDao extends JpaRepository<Rue, Long> {
int deleteByIdIn(List<Long> ids);
int deleteByQuartierId(Long id);
List<Rue> findByQuartierId(Long id);
@Query("SELECT NEW Rue(item.id,item.libelle) FROM Rue item")
List<Rue> findAllOptimized();
}