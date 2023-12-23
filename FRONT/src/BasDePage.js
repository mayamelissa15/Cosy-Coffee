const BasDePage = () => {
    return ( <div class="py-10 bg-[#F5F5DC] ">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
      <div class="text-black">
        <h1 class="text-2xl font-bold mb-4">Cozy Coffee</h1>
        <p class="text-sm mb-4">Votre café préféré pour une bonne lecture</p>
        <p class="text-xs">123 Rue du Livre, Ville</p>
        <p class="text-xs">Email : contact@cozycoffee.com</p>
      </div>
  
      <div class="text-black ">
        <h2 class="text-lg font-medium mb-4">Horaires d'ouverture</h2>
        <p class="text-sm mb-2">Lundi - Vendredi : 7h - 20h</p>
        <p class="text-sm">Samedi - Dimanche : 8h - 18h</p>
      </div>
  
      <div class="text-black">
        <h2 class="text-lg font-medium mb-4">Liens rapides</h2>
        <ul>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Livres en vente</a></li>
          <li><a href="#">Événements</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
  
      <div class="text-black">
        <h2 class="text-lg font-medium mb-4">Suivez-nous</h2>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Twitter</a></li>
        </ul>
      </div>
    </div>
  
    <div class="mt-8 text-center">
      <p class="text-xs text-black">&copy; 2023 Cozy Coffee. Tous droits réservés.</p>
    </div>
  </div>
   );
}
 
export default BasDePage;