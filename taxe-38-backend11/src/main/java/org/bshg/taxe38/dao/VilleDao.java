package org.bshg.taxe38.dao;
import org.bshg.taxe38.entity.Ville;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;
public interface VilleDao extends JpaRepository<Ville, Long> {
int deleteByIdIn(List<Long> ids);
@Query("SELECT NEW Ville(item.id,item.libelle) FROM Ville item")
List<Ville> findAllOptimized();
}