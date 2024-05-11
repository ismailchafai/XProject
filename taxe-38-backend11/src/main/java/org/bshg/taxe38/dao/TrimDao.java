package org.bshg.taxe38.dao;
import org.bshg.taxe38.entity.Trim;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;
public interface TrimDao extends JpaRepository<Trim, Long> {
int deleteByIdIn(List<Long> ids);
@Query("SELECT NEW Trim(item.id,item.libelle) FROM Trim item")
List<Trim> findAllOptimized();
}