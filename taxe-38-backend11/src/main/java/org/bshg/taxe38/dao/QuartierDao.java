package org.bshg.taxe38.dao;
import org.bshg.taxe38.entity.Quartier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;
public interface QuartierDao extends JpaRepository<Quartier, Long> {
int deleteByIdIn(List<Long> ids);
int deleteBySecteurId(Long id);
List<Quartier> findBySecteurId(Long id);
@Query("SELECT NEW Quartier(item.id,item.libelle) FROM Quartier item")
List<Quartier> findAllOptimized();
}